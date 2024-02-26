export const dynamic = 'force-dynamic';
export const revalidate = 0;


import prisma from "@/lib/prisma";
import { TodosGrid, NewTodo } from "@/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'Desc Todos',
};

export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
  console.log('construido');

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>

      <div className="w-full px-5 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={ todos } />
    </>
  );
}