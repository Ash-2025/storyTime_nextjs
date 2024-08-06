'use server';

import { auth } from "@/auth";
import { supabase } from "@/lib/utils";
export async function submit(formdata: FormData) {
    const session = await auth();
    const title = formdata.get('title') as string
    const description = formdata.get('description') as string
    const file = formdata.get('file') as File

    if(!title || !description || !file){
        return {success:'Please provide all Fields'}
    }
    console.log(file);
    console.log(title, description);

    /*const { data: uploadData, error: uploadError } = await supabase.storage
        .from('posts')
        .upload(`/Audio/${file.name}`, file);

    if (uploadError) {
        console.log(uploadError);
        return { success: 'Data Failed' };
    }

    console.log(uploadData);

    // Get the public URL of the uploaded file
    if (uploadData !== null) {
        const SIX_MONTHS_IN_SECONDS = 6 * 30 * 24 * 60 * 60;

        const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from('posts')
        .createSignedUrl(uploadData.path, SIX_MONTHS_IN_SECONDS);

        if (signedUrlData) {
            console.log(signedUrlData);
            return { success: 'Data Success', url: signedUrlData };
        }
    }
    */
    return { success: 'Data Success', url: null };
}