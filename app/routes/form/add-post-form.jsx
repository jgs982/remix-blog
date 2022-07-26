import { Form, useParams } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { Input, Textarea, ButtonPrimary } from "../../components/shared"
import { createPost } from "../../api/posts"

export default function AddPostForm() {

  const { category } = useParams()

  return (
    <Form method="POST" action="/form/add-post-form" className="flex flex-col">
      <Input name="title" placeholder="Titulo" className="my-2" />
      <Input name="description" placeholder="Descripción" />
      <Input name="slug" placeholder="Slug" />

      <Input name="category" value={category} />

      <Textarea name="content" placeholder="Contenido del post" rows="6" />

      <ButtonPrimary type="submit" className="mt-3">
        Crear Post
      </ButtonPrimary>
    </Form>
  );
}

export async function action(props) {
  const { request } = props;

  const formData = await request.formData();
  const category = formData.get("category");

  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    slug: formData.get("slug"),
    content: formData.get("content"),
  };

  createPost(data, category);

  return redirect("/");
}