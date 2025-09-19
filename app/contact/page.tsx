import {
  Phone,
  Mail,
  MapPin,
  Users,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-medium mb-6 text-sm">
            Engineers Without Borders
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Connect with <span className="text-blue-600">EWB</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in creating sustainable engineering solutions for
            communities in need. Together, we can build a better world through
            engineering excellence and social impact.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "rgb(45, 92, 159)" }}
              >
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-base">Pulchowk Campus Chapter</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base">
                    Phone
                  </h3>
                  <a
                    href="tel:+9779867331247"
                    className="text-gray-700 text-base hover:text-blue-600 transition-colors font-medium"
                  >
                    +977 986-7331247
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Available Mon-Fri, 9AM-5PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base">
                    Email
                  </h3>
                  <a
                    href="mailto:ewbpulchowk@gmail.com"
                    className="text-gray-700 text-base hover:text-blue-600 transition-colors font-medium"
                  >
                    ewbpulchowk@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-base">
                    Location
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/pzf8cnb1rrpJNoNm8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-base hover:text-blue-600 transition-colors font-medium"
                  >
                    IOE, Pulchowk Campus, Lalitpur (Nepal)
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h4 className="text-base font-semibold text-gray-900 mb-4">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ewbpulchowk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-lg"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/ewbpulchowk?igsh=MXRxd2I4ajBhZDlsNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center hover:bg-pink-700 transition-all duration-200 shadow-lg"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/ewbpulchowk?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-200 shadow-lg"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ewb-pulchowk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center hover:opacity-80 transition-all duration-200 shadow-lg"
                  style={{ backgroundColor: "rgb(45, 92, 159)" }}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}