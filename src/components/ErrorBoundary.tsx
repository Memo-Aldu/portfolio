"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private readonly handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-[#1F1F1F] rounded-lg border-2 border-red-500/20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl mb-4"
          >
            ⚠️
          </motion.div>
          
          <h2 className="text-2xl font-bold text-red-400 mb-2">
            Oops! Something went wrong
          </h2>
          
          <p className="text-gray-400 text-center mb-6 max-w-md">
            We encountered an unexpected error. Don't worry, it's not your fault!
          </p>

          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mb-6 p-4 bg-[#2A2A2A] rounded border border-red-500/30 max-w-2xl">
              <summary className="cursor-pointer text-red-300 font-mono text-sm mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-xs text-red-200 overflow-auto">
                {this.state.error.stack}
              </pre>
            </details>
          )}

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleRetry}
              className="px-6 py-3 bg-[#F7A650] text-[#181818] rounded-lg font-semibold hover:bg-[#f27705] transition-colors"
            >
              Try Again
            </motion.button>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-[#F7A650] text-[#F7A650] rounded-lg font-semibold hover:bg-[#F7A650] hover:text-[#181818] transition-colors"
              >
                Go Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
