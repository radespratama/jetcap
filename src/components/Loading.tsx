export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative z-[60]">
        <h3 className="text-white text-3xl lg:text-4xl select-none animate-pulse transform -rotate-6">
          Zzz...
        </h3>
      </div>
      <div className="w-[100vw] h-screen backdrop-blur bg-gray-950/95 fixed top-0 right-0 left-0 z-50" />
    </>
  );
}
