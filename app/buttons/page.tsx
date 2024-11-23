//é possivel criar diversas paginas para aplicação, basta criar uma pasta para esta pagina no APP

import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary outline</Button>
      <Button variant="Danger">Danger</Button>
      <Button variant="DangerOutline">Danger outline</Button>
      <Button variant="Super">Super</Button>
      <Button variant="SuperOutline">Super outline</Button>
      <Button variant="Ghost">Ghost</Button>
      <Button variant="Sidebar">Sidebar</Button>
      <Button variant="SidebarOutline">Sidebar outline</Button>
    </div>
  );
};

export default ButtonsPage;
