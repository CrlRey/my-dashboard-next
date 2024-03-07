import { ClientCounter } from "@/client";

export const metadata = {
  title: 'Count page',
  description: 'count page for more or less',
 };

export default function CounterPage() {

  

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Toca para aumentar</span>
      
    
      <ClientCounter />
    
    
    </div>
  );
}