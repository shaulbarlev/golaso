"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
  };
}

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full h-full max-w-4xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-contain w-full h-full"
              width={1000}
              height={1000}
              onClick={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
