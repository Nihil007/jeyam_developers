import React, { useState } from "react";

// const MAP_IMAGE = "/mnt/data/be2f0752-fe44-473b-a992-cf7e4a390bf3.png";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    plot: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim() || !/^[\d+\-\s()]{6,}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    try {
      setSending(true);
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));
      setSuccess("Message sent — the property owner will contact you shortly.");
      setForm({ name: "", email: "", phone: "", message: "", plot: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100">Get in Touch with Property Owner</h2>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-200 block mb-2">Name</label>
              <input
                value={form.name}
                onChange={update("name")}
                className="w-full rounded-md px-4 py-3 bg-white/30 placeholder-white/70 text-white outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200 block mb-2">Email</label>
              <input
                value={form.email}
                onChange={update("email")}
                className="w-full rounded-md px-4 py-3 bg-white/30 placeholder-white/70 text-white outline-none"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200 block mb-2">Phone Number</label>
              <input
                value={form.phone}
                onChange={update("phone")}
                className="w-full rounded-md px-4 py-3 bg-white/30 placeholder-white/70 text-white outline-none"
                placeholder="+91 98xxxxxxxx"
                type="tel"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200 block mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={update("message")}
                className="w-full rounded-md px-4 py-3 bg-white/30 placeholder-white/70 text-white outline-none min-h-[110px]"
                placeholder="Tell the owner about your interest..."
              />
            </div>

            <div>
              <label className="text-sm text-gray-200 block mb-2">Plot ID or Property Name</label>
              <input
                value={form.plot}
                onChange={update("plot")}
                className="w-full rounded-md px-4 py-3 bg-white/30 placeholder-white/70 text-white outline-none"
                placeholder="Plot ID or Property Name"
              />
            </div>

            {error && <div className="text-sm text-red-300">{error}</div>}
            {success && <div className="text-sm text-green-300">{success}</div>}

            <div className="pt-2">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md transition disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Card */}
        <aside className="flex items-start justify-center">
          <div className="w-full max-w-md bg-white/90 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-4">
            <div className="h-10 w-36 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">
            <img
                src="/logo.webp"
                alt="Jeyan Developers Logo"
                className="h-full w-full object-cover"
            />
            </div>
              <div>
                <h4 className="font-semibold text-gray-800">Jeyan Developers</h4>
                <p className="text-sm text-gray-500">Real Estate & Land Sales</p>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 4.5c0-1.242.99-2.25 2.25-2.25h2.1c.96 0 1.8.627 2.07 1.545l.74 2.47c.24.802-.015 1.68-.63 2.24l-1.26 1.15c-.18.17-.24.43-.15.66a12.3 12.3 0 006.84 6.84c.23.09.49.03.66-.15l1.15-1.26c.56-.61 1.44-.87 2.24-.63l2.47.74c.92.27 1.55 1.11 1.55 2.07v2.1c0 1.26-1.01 2.25-2.25 2.25H17.5C9.57 22 2 14.43 2 6.5V4.5z"
                />
                </svg>

                <span className="text-sm">12333333333</span>
              </div>

              <div className="mt-4">
                <div className="rounded-md overflow-hidden border">
                <iframe
                    title="google-map"
                    width="100%"
                    height="150"
                    loading="lazy"
                    allowFullScreen
                    className="w-full h-40 rounded-md border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.87617890922!2d77.74217780000001!3d8.72156145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1764016823625!5m2!1sen!2sin"
                ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p className="mb-2">Trusted for over 20 years. Contact us for site visits and inspection.</p>
              <a href="mailto:info@jeyan.dev" className="text-emerald-600 hover:underline">info@jeyan.dev</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
