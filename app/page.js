
import AppAreaChat from "@/components/charts/area-chat";
import AppBarChat from "@/components/charts/bar-chat";
import AppPieChat from "@/components/charts/pie-chat";
import CardList from "@/components/cards/card-list";
import TodoList from "@/components/todos/todo-list";


const  HomePage = ()=> {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChat/>
        
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title='Subject Teacher'/>
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChat/> 
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
    
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChat />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title='Latest Study Resources'/>
      </div>

    </div>
  );
};

export default HomePage;
