<<<<<<< HEAD
import Image from "next/image";

type Props = {
     question: string;
}


export const QuestionBubble = ({question }: Props) => {
    return(
        <div className="flex items-center gap-x-4 mb-6"> 
            <Image 
          src="/bookSad.svg" 
          alt=""
          height={60}
          width={60}
          className="hidden lg:block"
           />
               <Image 
          src="/bookSad.svg" 
          alt=""
          height={60}
          width={60}
          className="block lg:hidden"
           />
               <Image 
          src="/bookSad.svg" 
          alt=""
          height={60}
          width={60}
          className="hidden lg:hiden"
           />
           <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base">
            {question}
            <div className="absolute -left-3 top-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90"></div>
           </div> 
        </div>
    )
=======
import Image from "next/image";

type Props = {
     question: string;
}


export const QuestionBubble = ({question }: Props) => {
    return(
        <div className="flex items-center gap-x-4 mb-6"> 
            <Image 
          src="/bookSad.svg" 
          alt=""
          height={60}
          width={60}
          className="hidden lg:block"
           />
               <Image 
          src="/bookSad.svg" 
          alt=""
          height={60}
          width={60}
          className="block lg:hidden"
           />
               <Image 
          src="/bookSad.svg" 
          alt=""
          height={60}
          width={60}
          className="hidden lg:hiden"
           />
           <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base">
            {question}
            <div className="absolute -left-3 top-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90"></div>
           </div> 
        </div>
    )
>>>>>>> 60e8008233769037d0e518b9e7fa746ac10c41a9
}