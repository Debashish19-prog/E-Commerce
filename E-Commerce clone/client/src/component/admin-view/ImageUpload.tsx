import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRef } from "react";
import { CloudUpload , File , X} from "lucide-react";
import { Button } from "@/components/ui/button";
function ImageUpload(){
    const imageRef = useRef(null) ;
    const [image,setImage] = useState<File | null>(null) ;
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0] ;
        if(file) setImage(file) ;
        console.log(event.target.files?.[0]) 
        console.log(`File Name is ${event.target.files?.[0].name}`);
    }
    return (
        <>
            <Label className="">Upload Image</Label>
            <div className="py-2">
                <Input id="image-input" type="file" className="hidden"  onChange={(e)=>handleChange(e)}></Input>
                {!image ? 
                (
                    <Label htmlFor="image-input" className="mt-2 border-2 border-dashed h-32 flex flex-col justify-center items-center rounded-2xl">
                        <CloudUpload/>
                        <span>Drag and Drop</span>
                    </Label>
                ) : 
                (
                    <div className="w-full flex items-center gap-2 border-dashed border-2 rounded-lg p-2">
                        <File size={30}/>
                        <p>{image.name}</p>
                        <Button className="cursor-pointer" onClick={()=>{setImage(null)}}>
                            <X/>
                        </Button>
                    </div>
                )
                }
                
            </div>
        </>
    )
}
export default ImageUpload;