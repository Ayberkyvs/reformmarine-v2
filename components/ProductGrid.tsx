export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="rounded-lg border p-4">
          <div className="mb-4 h-40 rounded bg-gray-200"></div>
          <h3 className="font-semibold">Product {item}</h3>
          <p className="text-gray-600">$99.99</p>
        </div>
      ))}
    </div>
  );
}
