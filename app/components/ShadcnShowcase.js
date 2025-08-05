"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, Info } from "lucide-react";

const ShadcnShowcase = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">Shadcn/UI Components Showcase</h1>
        <p className="text-zinc-400">Examples of shadcn/ui components integrated into your portfolio</p>
      </div>

      <Separator />

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-zinc-800/60 border-zinc-700/50">
          <CardHeader>
            <CardTitle className="text-zinc-100">Project Card Example</CardTitle>
            <CardDescription className="text-zinc-400">
              Using shadcn Card components for better structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge>Next.js</Badge>
            </div>
            <p className="text-zinc-300 text-sm">
              This card demonstrates how shadcn components provide consistent styling and better accessibility.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800/60 border-zinc-700/50">
          <CardHeader>
            <CardTitle className="text-zinc-100 flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>HA</AvatarFallback>
              </Avatar>
              User Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 text-sm">
              Avatar component with fallback for user profiles and testimonials.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Section */}
      <div className="space-y-4">
        <Alert className="border-blue-500/50 bg-blue-950/50">
          <Info className="h-4 w-4" />
          <AlertTitle className="text-blue-200">Information</AlertTitle>
          <AlertDescription className="text-blue-300">
            This is an info alert using shadcn Alert component.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="border-red-500/50 bg-red-950/50">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            This is an error alert with destructive variant.
          </AlertDescription>
        </Alert>
      </div>

      {/* ScrollArea Showcase */}
      <Card className="bg-zinc-800/60 border-zinc-700/50">
        <CardHeader>
          <CardTitle className="text-zinc-100">ScrollArea Component</CardTitle>
          <CardDescription className="text-zinc-400">
            Smooth scrolling areas with custom scrollbars
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-zinc-200 font-medium mb-2">Vertical Scroll</h4>
              <ScrollArea className="h-32 w-full border border-zinc-700 rounded-md p-4">
                <div className="space-y-2">
                  {Array.from({ length: 15 }, (_, i) => (
                    <div key={i} className="text-zinc-300 text-sm">
                      Scrollable item {i + 1} - This content demonstrates vertical scrolling
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div>
              <h4 className="text-zinc-200 font-medium mb-2">Horizontal Scroll</h4>
              <ScrollArea className="w-full whitespace-nowrap border border-zinc-700 rounded-md p-4">
                <div className="flex space-x-4">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="flex-shrink-0 w-32 h-20 bg-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-300 text-sm">
                      Card {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Elements */}
      <Card className="bg-zinc-800/60 border-zinc-700/50">
        <CardHeader>
          <CardTitle className="text-zinc-100">Interactive Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-2">
            <Input
              placeholder="Enter some text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-zinc-700/50 border-zinc-600 text-white"
            />
            <Textarea
              placeholder="Enter a longer message..."
              className="bg-zinc-700/50 border-zinc-600 text-white"
            />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog with ScrollArea</Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-700 max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-zinc-100">ScrollArea Dialog Example</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  This dialog uses ScrollArea for better content management.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[400px] pr-4">
                <div className="space-y-4">
                  <p className="text-zinc-300">
                    Your project modals now use ScrollArea for smooth scrolling experience.
                  </p>
                  {/* Demo content to show scrolling */}
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="p-3 bg-zinc-800/50 rounded-lg">
                      <h4 className="text-zinc-200 font-medium">Item {i + 1}</h4>
                      <p className="text-zinc-400 text-sm">
                        This is demo content to showcase the ScrollArea component in action.
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="flex justify-end pt-4">
                <Button>Got it!</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShadcnShowcase;