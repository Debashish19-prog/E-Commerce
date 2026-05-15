import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Sheet,SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent,  SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import ImageUpload from "@/component/admin-view/ImageUpload";
import { ImageUp } from "lucide-react";
const category=[
    {
        id:"men",
        value : "Men"
    },
    {
        id:"women",
        value : "Women"
    },
    {
        id:"kids",
        value : "Kids"
    },
    {
        id:"accessories",
        value : "Accessories"
    },
    {
        id:"footwear",
        value : "Footwear"
    },
]
const brands = [
    {
        id : "nike",
        value : "Nike"
    },
    {
        id : "adidas",
        value : "Adidas" ,
    },
    {
        id : "puma",
        value : "Puma",
    },
    {
        id : "levi",
        value : "Levi"
    }
]
function Products(){
    const [open, setOpen] = useState(false) ;
    return (
        <>
            <div className="flex justify-end border-b px-2 py-2">
                <Button className="cursor-pointer" onClick={()=>setOpen(!open)}>
                    Add Product
                </Button>
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="py-1 text-xl">
                            <span>Add a New Product</span>
                        </SheetTitle>

                    </SheetHeader>
                    
                    {/* <div className="px-3">
                        <ImageUpload/>
                    </div> */}
                    
                    {/* form elements for the adding products  */}
                    {/* 
                        title -> input (text) 
                        description -> textarea
                        category -> select (with options) 
                        brand -> select (with options) 
                        sale price -> input (number) 
                        total stock -> input (number)
                    */}
                    <div className=" px-3 py-1 overflow-y-auto">
                        <ImageUpload/>
                        <FieldGroup> 
                            <Field>
                                <FieldLabel htmlFor="input-title">
                                    Title
                                </FieldLabel>
                                <Input 
                                    id="input-title"
                                    placeholder="Enter Title..."
                                ></Input>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="input-description">
                                    Description
                                </FieldLabel>
                                <Textarea 
                                    id="input-description"
                                    placeholder="Enter description..."
                                >
                                </Textarea>
                            </Field>
                            <Field>
                                <FieldLabel>Category</FieldLabel>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Category"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {category.map((e)=>{
                                            return (
                                                <SelectItem key={e.id} value={e.id}>{e.value}</SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                            </Field>
                            <Field>
                                <FieldLabel>Brand</FieldLabel>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Brand"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {brands.map((e)=>{
                                            return (
                                                <SelectItem key={e.id} value={e.id}>{e.value}</SelectItem>
                                            )
                                        })}
                                    </SelectContent>
                                </Select>
                            </Field>
                            
                            <Field>
                                <FieldLabel htmlFor="input-sale-price">Sale Price</FieldLabel>
                                <Input id="input-sale-price" placeholder="Enter Price" type="number"></Input>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="input-total-stock">Total Stock</FieldLabel>
                                <Input placeholder="Enter total" id="input-total-stock" type="number"></Input>
                            </Field>

                            {/* <Field>
                                <Button>
                                    Submit
                                </Button>
                            </Field> */}
                            
                        </FieldGroup>
                    </div>

                    <SheetFooter>
                        <Button type="submit">
                            Submit
                        </Button>
                    </SheetFooter>

                </SheetContent>
            </Sheet>
        </>
    )
}
export default Products;