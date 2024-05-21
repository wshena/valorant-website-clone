import Link from "next/link";
import React from "react";

interface Props {
	data: {
		id: number;
		title: string;
		date: string;
		type: string;
		image: string;
	};
}

const ArticleCard = ({ data }: Props) => {
	return (
		<Link href={"#"} className="flex flex-col w-[300px] h-[300px] xl:w-[350px]">
			<div className="artikel-image relative">
				<img
					src={data.image}
					alt={data.title}
					width={350}
					height={200}
					className="w-[300px] xl:w-350px]"
				/>
			</div>
			<div className="my-[10px] flex items-center gap-[10px]">
				<span className="text-[.8rem]">{data.date}</span>
				<span className="text-[.8rem] uppercase text-lightRed">
					{data.type}
				</span>
			</div>
			<h1 className="uppercase font-anton text-[1rem] text-darkBrown">
				{data.title}
			</h1>
		</Link>
	);
};

export default ArticleCard;
