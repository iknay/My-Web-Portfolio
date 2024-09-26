import AddToPlaylist from "./AddToPlaylist";
import Download from "./Download";
import PlayRounded from "./PlayRounded";
import Share from "./Share";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icon = {
  PlayRounded: (props: IconProps) => <PlayRounded {...props} />,
  Share: (props: IconProps) => <Share {...props} />,
  Download: (props: IconProps) => <Download {...props} />,
  AddToPlaylist: (props: IconProps) => <AddToPlaylist {...props} />,
};
