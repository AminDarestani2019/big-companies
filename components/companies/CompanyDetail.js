export default function CompanyDetail(props)
{
    const {
        image,
        title,
        address,
        description,
        foundedYear,
        valuation,
        founders,
        headquarters,
        links
    } = props;
    return(
        <section className="bg-white max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-lg">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-contain rounded-lg mb-6 " 
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
            <address className="text-gray-500 italic mb-4">{address}</address>
            <p className="text-base text-gray-700 leading-relaxed font-sans">{description}</p>

            {/* <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">سال تاسیس</h4>
                    <p className="text-gray-700">{foundedYear}</p>
                </div>
            </div> */}
{/* 

            <div className="grid grid-cols-2 gap-6 mb-6">
                {foundedYear && (
                <div className="bg-gray-50 p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">سال تاسیس</h4>
                    <p className="text-gray-700">{foundedYear}</p>
                </div>
                )}

                {valuation && (
                <div className="bg-gray-50 p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">میزان سرمایه فعلی</h4>
                    <p className="text-gray-700">{valuation}</p>
                </div>
                )}

                {founders && founders.length > 0 && (
                <div className="bg-gray-50 p-4 rounded shadow-sm col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-1">بنیانگذاران</h4>
                    <p className="text-gray-700">{founders.join(", ")}</p>
                </div>
                )}

                {headquarters && (
                <div className="bg-gray-50 p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">دفتر مرکزی</h4>
                    <p className="text-gray-700">{headquarters}</p>
                </div>
                )}
            </div>

            {links && links.length > 0 && (
                <div>
                <h4 className="font-semibold text-gray-900 mb-2">لینک‌های مرتبط</h4>
                <ul className="list-disc list-inside text-blue-600">
                    {links.map((link) => (
                    <li key={link.url}>
                        <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            )} */}
            
        </section>
    );
}