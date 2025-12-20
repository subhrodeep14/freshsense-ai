import { motion } from "framer-motion";
import { ArrowRight, Scan, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: Scan,
      title: "Image Analysis",
      description:
        "Upload any fruit or vegetable image and our AI instantly analyzes its visual characteristics.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get freshness predictions in seconds with our optimized machine learning model.",
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description:
        "Trained on thousands of images to ensure reliable and consistent predictions.",
    },
    {
      icon: TrendingUp,
      title: "Smart Insights",
      description:
        "Understand the freshness level with detailed confidence scores and analysis.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden pt-24">
  {/* Background */}
  <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
  <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
  <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid gap-14 lg:grid-cols-2 items-center">
      
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 mx-auto lg:mx-0"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Freshness Detection
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Detect Freshness <br />
          <span className="text-gradient">Instantly</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0"
        >
          Upload an image of any fruit or vegetable and let our machine learning
          model predict its freshness with remarkable accuracy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Link to="/predict" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 h-12 text-base shadow-soft hover:shadow-glow"
            >
              Start Predicting
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <Link to="/about" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 h-12 text-base"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-lg mx-auto lg:max-w-none"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80"
            alt="Fresh fruits and vegetables"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-6 -left-6 w-28 h-28 md:w-32 md:h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-full blur-2xl" />
      </motion.div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our machine learning model uses advanced computer vision to analyze
              visual characteristics and determine freshness levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16"
          >
            <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-90" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Check Freshness?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Start using our AI-powered freshness detection system today. Upload
                an image and get instant results.
              </p>
              <Link to="/predict">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 h-12 text-base font-semibold"
                >
                  Try It Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;