import { signIn, useSession } from "next-auth/react";
import GoogleSignInLogo from "assets/images/btn_google_signin_light_normal_web@2x.png";
console.log(GoogleSignInLogo)

export default function Home() {

  const { data: session } = useSession();

  if(!session){

    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-screen h-screen flex items-center">
        <div className="text-center w-full h-screen bg-white-500 backdrop-filter backdrop-blur-md bg-opacity-10 border flex flex-col items-center justify-center">
            <button 
              className="bg-transparent py-2 px-4 rounded-lg my-2 text-black w-full flex justify-center"
              onClick={() => signIn('google')}>
                <img src={GoogleSignInLogo.src} alt="Google Login" height={46} width={191}/>
            </button>
        </div>
     </div>
    )
  }
  
  return (
      <div>Logged in {session.user.email}</div>
  )
}
