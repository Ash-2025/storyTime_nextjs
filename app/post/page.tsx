'use server'
import { Input } from "@/components/ui/input"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { redirect, useRouter } from "next/navigation"
import SubmitButton from "../components/SubmitButton"


function Postpage() {
    // const sess = await auth();
    async function submit(formdata: FormData) {
        'use server';

        await new Promise(resolve => setTimeout(resolve,3000))
        const title = formdata.get('title') as string
        const description = formdata.get('description') as string
        const file = formdata.get('file') as File
        if (!title || !description || !file) {
            return { success: 'Please provide all Fields' }
        }
        console.log({ title, description, file });
        console.log('Submitted')

        //supabase logic to upload data and update db

        redirect('/feed')
    }

    return (
        <>
            <main className="w-full h-screen flex flex-col gap-2 bg-black items-center justify-center">
                <Card className="max-w-[550px] w-[550px]">
                    <CardHeader>
                        <CardTitle color="black">POST PAGE</CardTitle>
                        <CardDescription color="black">POST A FUN STORY user -</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <form action={submit} className="flex flex-col space-y-2.5 text-black">
                                <Input type="text" name="title" placeholder="Title" required />
                                <Textarea className="max-h-22 resize-none" name="description" placeholder="Enter Post Description" maxLength={250} required />
                                <Label htmlFor="audio">File</Label>
                                <Input id="audio" type="file" name="file" accept=".mp3,audio/mpeg" required />
                                <SubmitButton title="Post" />
                            </form>
                        </div>
                        {

                        }
                    </CardContent>
                </Card>
                {

                }
            </main>
        </>
    )
}

export default Postpage


/*

const [isUploading, setisUploading] = useState(false);
    const [message, setmessage] = useState('');

    const router = useRouter();

    const fileRef = useRef<HTMLInputElement | null>(null);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setisUploading(true);

        try {
            const formData = new FormData(event.currentTarget);
            const { success } = await submit(formData);
            setmessage(success);

        } catch (error) {
            console.error('Error uploading file:', error);

        } finally {
            setisUploading(false);
            //   if (message==='Data Success') router.push('/feed')
            //   setmessage('');
        }
        // router.push('/feed')
        router.push('/feed')
    };

The first world war happened in 1910s and it was the most brutal wars of it's time. It didn't just happened overnight, their was a lot more involved. Let's understand the events of ww1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam voluptatum cumque facere, reprehenderit sit perspiciatis numquam ipsa cupiditate pariatur eveniet obcaecati quo delectus similique nobis qui corrupti quam quasi! Animi vero architecto sit fuga soluta nobis consectetur similique eos iure dolores doloremque expedita, voluptatum deserunt porro illum rerum, voluptate consequatur ullam nihil. Est harum deserunt molestiae porro dolores ratione cum? Distinctio ipsam dolorem odit delectus. Consectetur adipisci molestias tempora modi cupiditate, accusantium error non ipsum eaque provident quis ab rerum hic autem facere quibusdam? Voluptatem quae dolor, necessitatibus eaque assumenda eius dolores impedit quod quos atque, delectus aliquid voluptas error facere velit obcaecati sequi optio distinctio accusantium ullam eveniet perspiciatis nihil odit recusandae? Tempore amet culpa aliquid nisi sit atque, molestiae, aperiam dicta voluptate quam eveniet reprehenderit dolores necessitatibus inventore officiis suscipit. Odio animi eligendi officia possimus dolorum, quibusdam autem officiis reiciendis tenetur ullam asperiores, iste doloribus harum. Quae reprehenderit rerum libero sapiente, cum provident nam veniam animi nihil vitae laboriosam ipsam quasi et in assumenda inventore eveniet totam natus deleniti laborum, commodi rem magni. Ut iusto repellendus, eaque repellat tempora maxime laudantium soluta nihil ab quod fugit unde nam incidunt consequuntur deleniti blanditiis iste provident non cum? Maiores?
*/