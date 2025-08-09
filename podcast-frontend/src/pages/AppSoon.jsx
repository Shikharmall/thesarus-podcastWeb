import React from "react";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Mail,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

export default function Component() {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-16">
          {/* <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            Coming Soon
          </Badge> */}
          <h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, transparent 2%, #16181f)",
            }}
          >
            The SARUS - Podcast
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The revolutionary app that will transform how you connect, create,
            and collaborate. Get ready for something extraordinary.
          </p>
        </header>

        {/* Countdown Timer */}
        {/* <div className="flex justify-center mb-16">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Features Preview */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast",
              description: "Experience blazing fast performance with our optimized architecture",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Secure & Private",
              description: "Your data is protected with enterprise-grade security measures",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Built for Teams",
              description: "Seamless collaboration tools designed for modern workflows",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-purple-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Email Signup */}
        {/* <div className="max-w-md mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Be the First to Know</h3>
                <p className="text-gray-300">Get notified when we launch and receive exclusive early access</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div> */}

        {/* App Preview */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              {/* <Smartphone className="w-24 h-24 text-white mx-auto mb-4" /> */}
              <img
                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1754728736/thesarusapp_hytfox.jpg"
                className="w-[500px] my-5"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Mobile First Design
              </h3>
              <p className="text-gray-300">
                Optimized for all devices with a beautiful, intuitive interface
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <footer className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: <Twitter className="w-6 h-6" />, href: "#" },
              { icon: <Instagram className="w-6 h-6" />, href: "#" },
              { icon: <Github className="w-6 h-6" />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-white/5 hover:bg-white/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The SARUS. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
