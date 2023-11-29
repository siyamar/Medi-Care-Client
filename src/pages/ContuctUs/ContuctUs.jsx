import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ContuctUs = () => {
    return (
        <div>
            <form className="flex max-w-md flex-col gap-4 mx-auto pt-28 pb-16">
     <h2 className='text-4xl font-semibold'>Contuct Us</h2>
     <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput id="name" type="text" placeholder='name' required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your Phone" />
        </div>
        <TextInput id="password2" type="number" placeholder='phone' required shadow />
      </div>
      
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
        </div>
    );
};

export default ContuctUs;