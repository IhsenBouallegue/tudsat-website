import Bounded from "@/components/bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembershipForm`.
 */
export type MembershipFormProps = SliceComponentProps<Content.MembershipFormSlice>;

/**
 * Component for "MembershipForm" Slices.
 */
const MembershipForm = ({ slice }: MembershipFormProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <iframe
        title="Membership Form"
        src="https://easyverein.com/public/TUDSaT/applicationform/1979?iframe=True"
        style={{
          border: "none",
          width: "100%",
          minHeight: "1000px",
          height: "max-content",
        }}
      />
      <br />
      <small>
        <a
          href="https://easyverein.com"
          style={{ textDecoration: "none", color: "#878787" }}
          title="Vereinsverwaltungssoftware easyVerein"
        >
          Association management via easyVerein
        </a>
      </small>
    </Bounded>
  );
};

export default MembershipForm;
