import Image from "next/image";

import useUser from "@/hooks/useUser";

import Avatar from "../Avatar";

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);

  return (
    <div className="bg-neutral-700 h-44 relative">
      {fetchedUser?.coverImage && (
        <Image
          src={fetchedUser.coverImage}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="Cover Image"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute -bottom-16 left-4">
        <Avatar userId={userId} isLarge hasBorder />
      </div>
    </div>
  );
};

export default UserHero;
