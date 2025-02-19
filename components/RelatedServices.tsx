const RelatedServices = ({ data }: { data: any }) => {
	return (
		<>
			<div className="space-y-6">
				<h2 className="text-2xl font-bold tracking-tight">
					Users who viewed this also viewed
				</h2>
				{/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedProducts.map((image: any, index: number) => (
						<ImageCard
							key={index}
							src={image.src || "/placeholder.svg"}
							alt={image.alt}
							caption={image.caption}
						/>
					))}
				</div> */}
			</div>
		</>
	);
};

export default RelatedServices;
