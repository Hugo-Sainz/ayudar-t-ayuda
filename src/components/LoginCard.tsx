type LoginCardProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function LoginCard({ onSubmit }: LoginCardProps) {
  return (
    <>   
      <form 
      className="space-y-6"
      onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="email" className="block text-lg/6 font-medium text-gray-900">
            Usuario
          </label>
          <div className="mt-2">
            <input
              id="user"
              name="user"
              type="username"
              required
              autoComplete="username"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-lg/6 font-medium text-gray-900">
              Contraseña
            </label>
            <div className="text-sm">
              <a 
                href="#" 
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                onClick={() => alert("Comunicate al area de sistemas (222) 2137700 ext 1020")}>
                Olvidé mi contraseña
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  )
}
  