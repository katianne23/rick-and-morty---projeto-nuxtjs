// app.config.ts
export default defineAppConfig({
  ui: {
    pagination: {
      slots: {
        list: "flex items-center gap-2",

        item: "rounded-full cursor-pointer",

        button:
          "w-10 h-10 flex items-center justify-center rounded-full \
           bg-[#1A1A1A] border-0 text-gray-700  \
           hover:bg-gray-100 \
           data-[active=true]:bg-green-500 \
           data-[active=true]:text-white",

        prev: "bg-transparent border-none text-gray-400 hover:text-gray-600 cursor-pointer",
        next: "bg-transparent border-none text-gray-400 hover:text-gray-600 cursor-pointer",

        first: "hidden",
        last: "hidden",
      },
    },
  },
});
