<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

type Props = {
  onCheck: () => void;
  status: "correto" | "errado" | "nulo" | "completado";
  disabled?: boolean;
  lessonId?: number;
};

export const Footer = ({ onCheck, status, disabled, lessonId }: Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <footer
      className={cn(
        "lg:h-[140px] h-[100px] border-t-2",
        status === "correto" && "border-transparent bg-green-100 ",
        status === "errado" && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10 ">
        {status === "correto" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Muito bem!
            {/* idioma   */}
          </div>
        )}
        {status === "errado" && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Que pena, você errou!
            {/* idioma   */}
          </div>
        )}
        {status === "completado" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <Button
              variant="default"
              size={isMobile ? "sm" : "lg"}
              onClick={() => (window.location.href = `/licao/${lessonId}`)}
            >
              Recomeçar
            </Button>
            {/* idioma   */}
          </div>
        )}
        <Button
          disabled={disabled}
          className={cn(
            "ml-auto",
            status === "nulo" && "mr-auto",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={status === "errado" ? "Danger" : "secondary"}
        >
          {status === "nulo" && "Verificar"}
          {status === "correto" && "Próximo"}
          {status === "errado" && "Tentar Novamente"}
          {status === "completado" && "Continuar"}
        </Button>
      </div>
    </footer>
  );
};
=======
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

type Props = {
  onCheck: () => void;
  status: "correto" | "errado" | "nulo" | "completado";
  disabled?: boolean;
  lessonId?: number;
};

export const Footer = ({ onCheck, status, disabled, lessonId }: Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <footer
      className={cn(
        "lg:h-[140px] h-[100px] border-t-2",
        status === "correto" && "border-transparent bg-green-100 ",
        status === "errado" && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10 ">
        {status === "correto" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Muito bem!
            {/* idioma   */}
          </div>
        )}
        {status === "errado" && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Que pena, você errou!
            {/* idioma   */}
          </div>
        )}
        {status === "completado" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <Button
              variant="default"
              size={isMobile ? "sm" : "lg"}
              onClick={() => (window.location.href = `/licao/${lessonId}`)}
            >
              Recomeçar
            </Button>
            {/* idioma   */}
          </div>
        )}
        <Button
          disabled={disabled}
          className={cn(
            "ml-auto",
            status === "nulo" && "mr-auto",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={status === "errado" ? "Danger" : "secondary"}
        >
          {status === "nulo" && "Verificar"}
          {status === "correto" && "Próximo"}
          {status === "errado" && "Tentar Novamente"}
          {status === "completado" && "Continuar"}
        </Button>
      </div>
    </footer>
  );
};
>>>>>>> 60e8008233769037d0e518b9e7fa746ac10c41a9
