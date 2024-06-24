import { Content, FilledContentRelationshipField, LinkField, isFilled } from "@prismicio/client";

type DocumentData<TDocumentType extends Content.AllDocumentTypes["type"]> = Extract<
  Content.AllDocumentTypes,
  { type: TDocumentType }
>["data"];

export function isFilledRelatedData<
  TDocumentType extends Content.AllDocumentTypes["type"],
  TFieldID extends keyof DocumentData<TDocumentType>,
>(
  linkField: LinkField,
  documentType: TDocumentType,
  fieldID: TFieldID,
): linkField is FilledContentRelationshipField & {
  data: {
    [P in keyof DocumentData<TDocumentType> as P extends TFieldID
      ? P
      : never]: DocumentData<TDocumentType>[P];
  };
} {
  return (
    isFilled.contentRelationship(linkField) &&
    linkField.type === documentType &&
    typeof linkField.data === "object" &&
    linkField.data !== null &&
    fieldID in linkField.data
  );
}
