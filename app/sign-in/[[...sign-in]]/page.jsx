import { SignIn } from '@clerk/nextjs';
import Image from "next/image";
const SignUpPage = () => {
  return (
    <div className="format">
                <div className="absolute top-0 left-0 p-4">
                  <Image
                    src="/logo_b.png"
                    alt="Logo"
                    width={200} 
                    height={50} 
                    className="object-contain"
                  />
                </div>
    <div className="flex items-center justify-center min-h-screen">
      <SignIn />
    </div>
    </div>
  );
};

export default SignUpPage;
