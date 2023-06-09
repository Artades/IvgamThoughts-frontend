import React, { useEffect, useState } from "react";

interface InputProps {
	id: string;
	onChange: any;
	value: string;
	label: string;
	type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
	const [isBordered, setIsBordered] = useState(false);
	useEffect(() => {
		if (value.length) {
      setIsBordered(true)
    }else{
      setIsBordered(false);
    }

	}, [value, isBordered, setIsBordered]);
	return (
		<div className="relative">
			<input
				onChange={onChange}
				value={value}
				type={type}
				id={id}
				className={`
      ${isBordered ? "ring-blue-500" : "ring-neutral-600"}
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-transparent
      transition
      ring-2
        appearance-none
        focus:outline-none
       
        peer
        invalid:border-b-1
        `}
				placeholder=" "
			/>
			<label
				htmlFor={id}
				className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
        peer-focus:text-blue-300
      "
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
