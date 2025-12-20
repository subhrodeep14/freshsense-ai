import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Image as ImageIcon, Scan, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Predict = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    status: "fresh" | "spoiled";
    confidence: number;
    label: string;
  } | null>(null);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      processFile(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  }, []);

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setFileName(file.name);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setFileName("");
    setResult(null);
  };

  const handlePredict = async () => {
    if (!image) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate API call - Replace this with actual API call to your Python backend
    // Example: const response = await fetch('YOUR_API_URL/predict', { method: 'POST', body: formData });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock result - Replace with actual API response
    const mockResults = [
      { status: "fresh" as const, confidence: 94, label: "Fresh Apple" },
      { status: "fresh" as const, confidence: 89, label: "Fresh Banana" },
      { status: "spoiled" as const, confidence: 87, label: "Spoiled Orange" },
      { status: "fresh" as const, confidence: 92, label: "Fresh Tomato" },
    ];
    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];

    setResult(randomResult);
    setIsAnalyzing(false);

    toast({
      title: "Analysis Complete",
      description: `Detected: ${randomResult.label}`,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Freshness <span className="text-gradient">Prediction</span>
          </h1>
          <p className="text-muted-foreground">
            Upload an image of a fruit or vegetable to analyze its freshness level
            using our trained ML model.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {/* Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative rounded-2xl border-2 border-dashed transition-all duration-300 ${
              isDragging
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            } ${image ? "p-4" : "p-12"}`}
          >
            <AnimatePresence mode="wait">
              {!image ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center">
                    <Upload className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Drop your image here
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    or click to browse from your device
                  </p>
                  <label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <Button variant="outline" className="cursor-pointer" asChild>
                      <span>
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Browse Files
                      </span>
                    </Button>
                  </label>
                  <p className="text-xs text-muted-foreground mt-4">
                    Supports: JPG, PNG, WEBP
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-4"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                    <button
                      onClick={clearImage}
                      className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">
                      {fileName}
                    </p>
                    <Button
                      onClick={handlePredict}
                      disabled={isAnalyzing}
                      className="shadow-soft hover:shadow-glow transition-shadow"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Scan className="w-4 h-4 mr-2" />
                          Predict Freshness
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8"
              >
                <div
                  className={`p-6 rounded-2xl border ${
                    result.status === "fresh"
                      ? "bg-primary/5 border-primary/20"
                      : "bg-destructive/5 border-destructive/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        result.status === "fresh"
                          ? "bg-primary/10"
                          : "bg-destructive/10"
                      }`}
                    >
                      {result.status === "fresh" ? (
                        <CheckCircle2 className="w-7 h-7 text-primary" />
                      ) : (
                        <AlertCircle className="w-7 h-7 text-destructive" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {result.label}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            result.status === "fresh"
                              ? "bg-primary/10 text-primary"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {result.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {result.status === "fresh"
                          ? "This produce appears to be fresh and safe for consumption."
                          : "This produce shows signs of spoilage. Consider discarding."}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Confidence</span>
                          <span className="font-medium text-foreground">
                            {result.confidence}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.confidence}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              result.status === "fresh"
                                ? "bg-primary"
                                : "bg-destructive"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border"
          >
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Note:</strong> This is a demo
              interface. Connect your Python ML backend API to enable real
              predictions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Predict;
