<<<<<<< HEAD
type Props = {
    children: React.ReactNode;
}

const LessonLayout = ({ children }: Props) => {
return (
<div className="flex flex-col h-full">
    <div className="flex flex-col h-full w-full">
        {children}
    </div>

</div>
);
}

=======
type Props = {
    children: React.ReactNode;
}

const LessonLayout = ({ children }: Props) => {
return (
<div className="flex flex-col h-full">
    <div className="flex flex-col h-full w-full">
        {children}
    </div>

</div>
);
}

>>>>>>> 60e8008233769037d0e518b9e7fa746ac10c41a9
export default LessonLayout;