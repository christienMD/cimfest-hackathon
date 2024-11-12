import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLogo from "@/components/sections/AuthLogo/AuthLogo";

const artistCategories = [
  { value: "songwriter", label: "Song Writer" },
  { value: "beatproducer", label: "Beat Producer" },
  { value: "singer", label: "Singer" },
  { value: "instrumentalist", label: "Instrumentalist" },
];

const coachCategories = [
  { value: "songwriting_coach", label: "Songwriting Coach" },
  { value: "production_coach", label: "Production Coach" },
  { value: "vocal_coach", label: "Vocal Coach" },
  { value: "instrument_coach", label: "Instrumental Coach" },
];

// Updated form validation schema
const formSchema = z
  .object({
    image: z.any().optional(),
    phoneNumber: z
      .string()
      .regex(/^\+?[0-9]{8,15}$/, "Please enter a valid phone number"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    category: z.string().min(1, "Please select a category"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    keepSignedIn: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

const SignupForm = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] flex items-center justify-center p-4">
          <div className="w-full max-w-[533px] px-4 md:px-6">
            <AuthLogo />

            <div className="text-center mb-6">
              <h1 className="text-xl font-medium mb-1">Sign In</h1>
              <p className="text-gray-500 text-sm">Welcome back! Enter your</p>
            </div>

            <Tabs defaultValue="artist" className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-[#6E1EFA] bg-opacity-80 rounded-md">
                <TabsTrigger
                  value="artist"
                  className="rounded-md text-base font-medium data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=inactive]:text-white hover:text-white/90 transition-colors"
                >
                  Artist
                </TabsTrigger>
                <TabsTrigger
                  value="coach"
                  className="rounded-md text-base font-medium data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=inactive]:text-white hover:text-white/90 transition-colors"
                >
                  Coach
                </TabsTrigger>
              </TabsList>
              <TabsContent value="artist">
                <ArtistForm />
              </TabsContent>
              <TabsContent value="coach">
                <CoachForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-full md:w-[50%] p-4 md:p-8 lg:p-10">
          <div className="w-full max-w-[500px] h-[400px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden">
            <img
              src="/mixa.png"
              alt="Studio Mixer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ArtistForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
      phoneNumber: "",
      name: "",
      category: "",
      password: "",
      confirmPassword: "",
      keepSignedIn: false,
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Artist Form Data:", {
      ...data,
      image: data.image instanceof File ? data.image.name : null,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-center mb-6">
          <FormField
            control={form.control}
            name="image"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="imageUpload"
                      onChange={handleImageChange}
                      {...field}
                    />
                    <label
                      htmlFor="imageUpload"
                      className="w-16 h-16 bg-[#6E1EFA]/5 rounded-full flex items-center justify-center border-2 border-dashed border-[#6E1EFA]/20 cursor-pointer hover:border-[#6E1EFA] transition-colors overflow-hidden"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl text-[#6E1EFA]/40">+</span>
                      )}
                    </label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-3">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {artistCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="keepSignedIn"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-gray-200 text-[#6E1EFA] rounded-[4px] focus:ring-[#6E1EFA] focus:ring-offset-0"
                    />
                  </FormControl>
                  <Label className="text-sm text-gray-500">
                    Keep me signed in
                  </Label>
                </FormItem>
              )}
            />
            <Link
              to="/forgot-password"
              className="text-sm text-[#6E1EFA] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Link
            to="/suggest"
            // type="submit"
          >
            <button className="w-full h-[46px] bg-[#6E1EFA] text-white rounded-[20px] mt-4 hover:bg-[#5c19d4] hover:opacity-75 transition-colors">
              Sign up
            </button>
          </Link>

          <div className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6E1EFA] hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

const CoachForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
      phoneNumber: "",
      name: "",
      category: "",
      password: "",
      confirmPassword: "",
      keepSignedIn: false,
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Coach Form Data:", {
      ...data,
      image: data.image instanceof File ? data.image.name : null,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-center mb-6">
          <FormField
            control={form.control}
            name="image"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="coachImageUpload"
                      onChange={handleImageChange}
                      {...field}
                    />
                    <label
                      htmlFor="coachImageUpload"
                      className="w-16 h-16 bg-[#6E1EFA]/5 rounded-full flex items-center justify-center border-2 border-dashed border-[#6E1EFA]/20 cursor-pointer hover:border-[#6E1EFA] transition-colors overflow-hidden"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl text-[#6E1EFA]/40">+</span>
                      )}
                    </label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-3">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your coaching category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {coachCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] focus-visible:outline-none focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="keepSignedIn"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-gray-200 text-[#6E1EFA] rounded-[4px] focus:ring-[#6E1EFA] focus:ring-offset-0"
                    />
                  </FormControl>
                  <Label className="text-sm text-gray-500">
                    Keep me signed in
                  </Label>
                </FormItem>
              )}
            />
            <Link
              to="/forgot-password"
              className="text-sm text-[#6E1EFA] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Link to="/coach-channel">
            <Button
              type="submit"
              className="w-full h-[46px] bg-[#6E1EFA] text-white rounded-[20px] mt-4 hover:bg-[#5c19d4] hover:opacity-75 transition-colors"
            >
              Sign up
            </Button>
          </Link>

          <div className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6E1EFA] hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
