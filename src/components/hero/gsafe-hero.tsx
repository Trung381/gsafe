import Image from "next/image"
import Link from "next/link"

export default function GSafeHero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#e6f4ff]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/img/background.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Thiết bị báo cháy thông minh GSafe
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Bảo vệ tạo sản và sinh mạng của bạn bằng công nghệ báo cháy hiện đại
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="group">
                <button className="flex items-center gap-2 bg-[#0267AB] text-white px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#035289] w-full sm:w-auto">
                  <Image
                    src="/svg/contact.svg"
                    alt="Contact"
                    width={30}
                    height={26}
                    className="transition-colors duration-300 group-hover:brightness-110"
                  />
                  <span className="font-medium transition-colors duration-300 group-hover:text-white">NHẬN TƯ VẤN</span>
                </button>
              </Link>

              <Link href="/shop" className="group">
                <button className="flex items-center gap-2 bg-white text-[#0267AB] border border-[#0267AB] px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#0267AB] hover:text-white w-full sm:w-auto">
                  <Image
                    src="/svg/shopping.svg"
                    alt="Shop"
                    width={30}
                    height={30}
                    className="transition-colors duration-300 group-hover:[&>g>path]:fill-white"
                  />
                  <span className="font-medium transition-colors duration-300 group-hover:text-white">MUA NGAY</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/img/base.png"
              alt="GSafe Smart Fire Protection Device"
              width={600}
              height={400}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
