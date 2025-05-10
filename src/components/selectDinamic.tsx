import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "./ui/select";

interface Servicio {
    id_servicio: number;
    nombre: string;
    precio: string;
  }

interface Props{
    items?: Servicio[]
    onSelectChange: (value:string) => void
}

export default function SelectDinamic({items, onSelectChange}:Props ){

    const handleSelect = (value: string) => {
        onSelectChange(value)
      }

    return (
        <Select onValueChange={handleSelect}>
            <SelectTrigger id="service" className="w-full">
            <SelectValue placeholder="Seleccionar servicio" />
            </SelectTrigger>
            <SelectContent className="bg-white">
            {items?.map((item:Servicio, index)=>(
                <SelectItem 
                    value={item.nombre} 
                    key={index}
                    className="hover:bg-red-200"
                    >{item.nombre}
                </SelectItem>
            ))}
            </SelectContent>
        </Select>
    )
}