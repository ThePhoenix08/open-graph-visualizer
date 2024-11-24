import { SocialMetadata } from "@/components/Visualizer/metadataType";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Visualizer/useFetch";
import { useState } from "react";
import {
  Link as LinkIcon,
  Share2,
  MoreHorizontal,
  MessageCircle,
  Repeat2,
  Heart,
  BarChart3,
  Bookmark,
  Share,
  ThumbsUp,
} from "lucide-react";
import {
  FaWhatsapp as WhatsApp,
  FaFacebook as Facebook,
  FaSlack as Slack,
  FaLinkedin as Linkedin,
  FaDiscord as Discord,
  FaTwitter as Twitter,
} from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Card, CardContent } from "../ui/card";

function Visualizer() {
  const { url: urlParam } = useParams();
  const [url, setUrl] = useState<string>(urlParam as string);
  const { metadata, reqStatus, error } = useFetch(url as string);
  const navigate = useNavigate();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="w-full h-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] p-2">
      <div className="url-card flex gap-4 rounded-lg bg-background border-2 p-2">
        <div className="grid place-items-center p-2">
          <LinkIcon />
        </div>
        <Input
          placeholder="Enter your website URL"
          value={url}
          onChange={handleUrlChange}
        />
        <Button
          onClick={() => {
            navigate(`/url/${url}`);
          }}
        >
          Visualize
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-2 p-2">
        <div className="metadata-form flex flex-col gap-4 p-6 border-2 bg-background md:w-1/2 rounded-lg">
          <p className="text-xl">Open Graph Metadata</p>
          <div className="flex flex-col gap-2">
            {reqStatus === "loading" ? (
              <p>Loading...</p>
            ) : reqStatus === "success" ? (
              <>
                <div className="grid grid-cols-2 grid-flow-row gap-2">
                  <label htmlFor="title">Title</label>
                  <Input id="title" value={metadata?.title} readOnly />
                  <label htmlFor="description">Description</label>
                  <Input
                    id="description"
                    value={metadata?.description}
                    readOnly
                  />
                  <label htmlFor="image">Image</label>
                  <Input id="image" value={metadata?.image} readOnly />
                  <label htmlFor="siteName">Site Name</label>
                  <Input id="siteName" value={metadata?.siteName} readOnly />
                  <label htmlFor="type">Type</label>
                  <Input id="type" value={metadata?.type} readOnly />
                </div>
                <p className="text-lg">Twitter</p>
                <div className="twitter grid grid-cols-2 grid-flow-row gap-2">
                  <label htmlFor="card">Card</label>
                  <Input id="card" value={metadata?.twitter?.card} readOnly />
                  <label htmlFor="site">Site</label>
                  <Input id="site" value={metadata?.twitter?.site} readOnly />
                  <label htmlFor="creator">Creator</label>
                  <Input
                    id="creator"
                    value={metadata?.twitter?.creator}
                    readOnly
                  />
                </div>
              </>
            ) : reqStatus === "error" ? (
              <p>Error: {error}</p>
            ) : reqStatus === "idle" ? (
              <p>Fetching metadata...</p>
            ) : null}
          </div>
        </div>
        <div className="open-graph-previews md:w-1/2">
          {metadata ? (
            <SocialPreview metadata={metadata} />
          ) : reqStatus === "loading" ? (
            <p>Loading...</p>
          ) : reqStatus === "error" ? (
            <p>Error: {error}</p>
          ) : reqStatus === "idle" ? (
            <p>Fetching metadata...</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Visualizer;

const SocialPreview = ({ metadata }: { metadata: SocialMetadata }) => {
  const iconStyles = "h-6 w-6";
  const platformName = "John Doe";
  const timeAgo = "2 hours ago";
  const avatar = "https://avatar.iran.liara.run/public/46";

  return (
    <Card className="p-6 rounded-lg flex flex-col gap-4">
      <h2 className="text-xl">Social Media Previews</h2>
      <Tabs
        defaultValue="twitter"
        className="w-full flex flex-col gap-4 justify-center items-center"
      >
        <TabsList className="grid grid-cols-3 lg:grid-cols-7 h-fit w-fit gap-2 rounded-3xl border-2">
          <TabsTrigger
            value="twitter"
            className="data-[state=active]:bg-sky-500 rounded-3xl p-2 w-fit"
          >
            <Twitter className={iconStyles} />
          </TabsTrigger>
          <TabsTrigger
            value="facebook"
            className="data-[state=active]:bg-blue-600 rounded-3xl p-2 w-fit"
          >
            <Facebook className={iconStyles} />
          </TabsTrigger>
          <TabsTrigger
            value="linkedin"
            className="data-[state=active]:bg-blue-700 rounded-3xl p-2 w-fit"
          >
            <Linkedin className={iconStyles} />
          </TabsTrigger>
          <TabsTrigger
            value="slack"
            className="data-[state=active]:bg-emerald-500 rounded-3xl p-2 w-fit"
          >
            <Slack className={iconStyles} />
          </TabsTrigger>
          <TabsTrigger
            value="discord"
            className="data-[state=active]:bg-indigo-500 rounded-3xl p-2 w-fit"
          >
            <Discord className={iconStyles} />
          </TabsTrigger>
          <TabsTrigger
            value="whatsapp"
            className="data-[state=active]:bg-green-500 rounded-3xl p-2 w-fit"
          >
            <WhatsApp className={iconStyles} />
          </TabsTrigger>
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-gray-500 rounded-3xl p-2 w-fit"
          >
            <Share2 className={iconStyles} />
          </TabsTrigger>
        </TabsList>

        {/* Twitter Preview */}
        <TabsContent value="twitter" className="md:w-5/6">
          <Card className="border-border/50 bg-black text-white">
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                    <img
                      src={avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-white hover:underline">
                        {metadata.siteName}
                      </span>
                      <span className="text-gray-500">@JohnDoe · 1h</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-400">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-2 text-[15px] text-white">
                    {"<<< Post Content >>>"}
                  </div>

                  <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
                    <div className="relative aspect-[1.91/1] bg-gray-900">
                      <img
                        src={metadata.image || "/api/placeholder/600/314"}
                        alt={metadata.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 border-t border-gray-800">
                      <div className="text-sm text-gray-500">
                        {metadata.url}
                      </div>
                      <div className="font-bold text-white mt-0.5">
                        {metadata.title}
                      </div>
                      <div className="text-gray-500 text-sm mt-0.5 line-clamp-2">
                        {metadata.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-3 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1 hover:text-blue-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>482</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-green-500">
                      <Repeat2 className="h-4 w-4" />
                      <span>2,047</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-pink-500">
                      <Heart className="h-4 w-4" />
                      <span>17.2K</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-blue-500">
                      <BarChart3 className="h-4 w-4" />
                      <span>824K</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="hover:text-blue-500">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="hover:text-blue-500">
                        <Share className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Facebook Preview */}
        <TabsContent value="facebook" className="md:w-5/6">
          <Card className="border-border/50 bg-white text-black">
            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={avatar}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold hover:underline cursor-pointer">
                          John Doe
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm space-x-2">
                        <span>17 November at 13:40</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:bg-gray-100 rounded-full p-2">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>

                {/* Post Text */}
                <div className="text-[15px]">{"<<< Post Content >>>"}</div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                  <div className="relative aspect-[1.91/1]">
                    <img
                      src={metadata.image || "/api/placeholder/600/314"}
                      alt={metadata.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 space-y-1">
                    <div className="text-[13px] text-gray-500">
                      {metadata.url}
                    </div>
                    <div className="font-semibold">{metadata.title}</div>
                    <div className="text-gray-500 text-sm line-clamp-2">
                      {metadata.description}
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-1 border-t border-gray-200">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-[10px]">👍</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-[10px]">❤️</span>
                      </div>
                    </div>
                    <span className="ml-1 hover:underline cursor-pointer">
                      63K
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <span className="hover:underline cursor-pointer">
                      1.1K comments
                    </span>
                    <span className="hover:underline cursor-pointer">
                      4.6K shares
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between pt-1 border-t border-gray-200">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg text-gray-500">
                    <ThumbsUp className="h-5 w-5" />
                    <span className="font-semibold">Like</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg text-gray-500">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">Comment</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-lg text-gray-500">
                    <Share2 className="h-5 w-5" />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* LinkedIn Preview */}
        <TabsContent value="linkedin" className="md:w-5/6">
          <Card className="border-border/50 bg-white">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-black font-semibold">
                      {platformName}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Software Engineer
                    </div>
                    <div className="text-gray-400 text-sm">{timeAgo} • 🌏</div>
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-gray-300">
                  <div className="relative aspect-[1.91/1] w-full bg-gray-100">
                    <img
                      src={metadata.image}
                      alt={metadata.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 space-y-1">
                    <div className="font-semibold">{metadata.title}</div>
                    <div className="text-gray-600 text-sm line-clamp-2">
                      {metadata.description}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {metadata.siteName}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 text-gray-500 text-sm border-t pt-2">
                  <span>👍 125</span>
                  <span>💡 23</span>
                  <span>❤️ 12</span>
                  <span>• 18 comments</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Slack Preview */}
        <TabsContent value="slack" className="md:w-5/6">
          <Card className="border-border/50 bg-white">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline">
                      <span className="font-bold text-gray-900">
                        {platformName}
                      </span>
                      <span className="ml-2 text-gray-500 text-sm">
                        {timeAgo}
                      </span>
                    </div>
                    <div className="mt-1 rounded overflow-hidden border-l-4 border-l-emerald-500 border-y border-r border-gray-200">
                      <div className="relative aspect-[1.91/1] w-full bg-gray-100">
                        <img
                          src={metadata.image}
                          alt={metadata.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-3 space-y-1 bg-white">
                        <div className="font-bold text-gray-900">
                          {metadata.title}
                        </div>
                        <div className="text-gray-600 text-sm line-clamp-2">
                          {metadata.description}
                        </div>
                        <div className="text-gray-400 text-sm flex items-center">
                          <LinkIcon className="w-4 h-4 mr-1" />
                          {metadata.siteName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Discord Preview */}
        <TabsContent value="discord" className="md:w-5/6">
          <Card className="border-border/50 bg-[#36393f] text-white">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 overflow-hidden">
                    <img
                      src={avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline">
                      <span className="font-medium text-indigo-400">
                        {platformName}
                      </span>
                      <span className="ml-2 text-gray-400 text-xs">
                        {timeAgo}
                      </span>
                    </div>
                    <div className="mt-1 rounded-md overflow-hidden border border-gray-700 bg-[#2f3136]">
                      <div className="flex flex-col border-l-4 border-l-indigo-500">
                        <div className="p-3">
                          <div className="font-medium">{metadata.title}</div>
                          <div className="text-gray-400 text-sm line-clamp-2 mt-1">
                            {metadata.description}
                          </div>
                          <div className="text-gray-400 text-sm mt-2 flex items-center">
                            <LinkIcon className="w-4 h-4 mr-1" />
                            {metadata.siteName}
                          </div>
                        </div>
                        <div className="bg-gray-700">
                          <img
                            src={metadata.image}
                            alt={metadata.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* WhatsApp Preview */}
        <TabsContent value="whatsapp" className="md:w-5/6">
          <Card className="border-border/50 bg-[#E5DDD5]">
            <CardContent className="p-4">
              <div className="max-w-sm ml-auto space-y-1">
                <div className="bg-[#DCF8C6] rounded-lg p-2 shadow-sm">
                  <div className="rounded-lg overflow-hidden bg-white">
                    <div className="relative aspect-[1.91/1] w-full bg-gray-100">
                      <img
                        src={metadata.image}
                        alt={metadata.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-3 space-y-1">
                      <div className="font-semibold text-[#075E54]">
                        {metadata.title}
                      </div>
                      <div className="text-gray-600 text-sm line-clamp-2">
                        {metadata.description}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {metadata.siteName}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center mt-1 space-x-1">
                    <span className="text-gray-500 text-xs">{timeAgo}</span>
                    <span className="text-[#075E54]">✓✓</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* General Preview */}
        <TabsContent value="general" className="md:w-5/6">
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="rounded-lg overflow-hidden border">
                <div className="relative aspect-[1.91/1] w-full bg-gray-100">
                  <img
                    src={metadata.image}
                    alt={metadata.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-3 space-y-1">
                  <div className="font-semibold">{metadata.title}</div>
                  <div className="text-gray-600 text-sm line-clamp-2">
                    {metadata.description}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {metadata.siteName}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};
