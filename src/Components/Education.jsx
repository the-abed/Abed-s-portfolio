import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.A. (Hons) in Arabic Language & Literature",
      institution: "University of Chittagong",
      duration: "2025 - Present",
      location: "Chittagong, Bangladesh",
      description: "Pursuing deep knowledge in Arabic linguistics and literature while simultaneously developing advanced technical skills in modern web development and MERN stack architecture.",
      accentColor: "from-emerald-500 to-teal-600",
    }
  ];

  return (
    <section 
      id="education" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative">
        
        {/* Header Section - Matches your Projects Header style */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            Learning Journey
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My <span className="text-primary">Education</span>
          </motion.h2>
        </motion.div>

        {/* Education List */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 p-8">
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  {/* Icon & Title */}
                  <div className="flex gap-4">
                    <div className="p-4 bg-primary/10 rounded-xl h-fit">
                      <GraduationCap className="text-primary w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Metadata (Date/Location) */}
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border border-border">
                      <Calendar size={14} className="text-primary" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border border-border">
                      <MapPin size={14} className="text-primary" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description Box */}
                <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10 italic leading-relaxed text-muted-foreground">
                  "{edu.description}"
                </div>

                {/* Accent Border Bottom - Exact same as your project card */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.accentColor}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;