import { motion } from "framer-motion";
import { Brain, Database, Cpu, BarChart3, Users, Target } from "lucide-react";

const About = () => {
  const techStack = [
    {
      icon: Brain,
      name: "Deep Learning",
      description: "Convolutional Neural Networks for image classification",
    },
    {
      icon: Database,
      name: "Training Data",
      description: "Thousands of labeled images of fresh and spoiled produce",
    },
    {
      icon: Cpu,
      name: "Python Backend",
      description: "TensorFlow/Keras model served via REST API",
    },
    {
      icon: BarChart3,
      name: "High Accuracy",
      description: "Optimized model achieving reliable predictions",
    },
  ];

  const teamGoals = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To reduce food waste by helping consumers and businesses quickly assess produce freshness using accessible AI technology.",
    },
    {
      icon: Users,
      title: "Who We Are",
      description:
        "A team of ML enthusiasts passionate about applying computer vision to solve real-world problems in food quality assessment.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">FreshSense</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              FreshSense is a machine learning project designed to detect the
              freshness of fruits and vegetables using image analysis. Our trained
              model analyzes visual characteristics to provide instant freshness
              predictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Team */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamGoals.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern machine learning frameworks and web technologies
              for optimal performance and user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              How Our Model Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Image Upload",
                  description:
                    "User uploads an image of a fruit or vegetable through our web interface.",
                },
                {
                  step: "02",
                  title: "Preprocessing",
                  description:
                    "The image is resized and normalized to match our model's input requirements.",
                },
                {
                  step: "03",
                  title: "Feature Extraction",
                  description:
                    "Our CNN extracts visual features like color, texture, and shape characteristics.",
                },
                {
                  step: "04",
                  title: "Classification",
                  description:
                    "The model classifies the produce as fresh or spoiled with a confidence score.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
