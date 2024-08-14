import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import Image from "next/image";

export default function Filtro() {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <Image src="/solutions.jpg"  width={200} height={200} alt="" />
      </Popover.Panel>
    </Popover>


  );
}