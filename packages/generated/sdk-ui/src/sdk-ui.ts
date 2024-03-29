import { AppsMenu } from "apps-menu";
import { AssetInput } from "asset-input";
import { FileInput } from "asset-input";
import { getTypeFromFileBlob } from "asset-input";
import { makeBackendAsset } from "asset-input";
import { MediaRecorderComponent } from "asset-input";
import { MediaRecorder } from "asset-input";
import { ReactMediaRecorder } from "asset-input";
import { SelectMedia } from "asset-input";
import { useReactMediaRecorder } from "asset-input";
import { WebcamCapture } from "asset-input";
import { AssetView } from "asset-view";
import { getSrc } from "asset-view";
import { InteractiveAsset } from "asset-view";
import { itemGetBackendAssetUrl } from "asset-view";
import { ModelItemAssetView } from "asset-view";
import { useAssetInfo } from "asset-view";
import { useAsset } from "asset-view";
import { AuthenticationMethodsCrud } from "authentication";
import { LoginForm } from "authentication";
import { LoginWrapper } from "authentication";
import { MeAuthenticationInfo } from "authentication";
import { PersonProfileDetailsForm } from "authentication";
import { PictureWithInfoDropdown } from "authentication";
import { PublicPersonComponent } from "authentication";
import { PublicProfile } from "authentication";
import { SignupForm } from "authentication";
import { UpdateMeForm } from "authentication";
import { BigButton } from "big-button";
import { ContextMenuItemComponent } from "context-menu";
import { useContextMenu } from "context-menu";
import { useContextPopper } from "context-menu";
import { useContext } from "context-menu";
import { CrudGrid } from "db-crud";
import { CrudTable } from "db-crud";
import { CrudTimeline } from "db-crud";
import { CrudTree } from "db-crud";
import { DatasetForm } from "db-crud";
import { DbPage } from "db-crud";
import { getPropertiesDataParameterNames } from "db-crud";
import { IndexInstanceContainer } from "db-crud";
import { ModelComponent } from "db-crud";
import { openWhatsapp } from "db-crud";
import { shimmer } from "db-crud";
import { SimplifiedSchemaFormDebug } from "db-crud";
import { sortToItem } from "db-crud";
import { SpaceCard } from "db-crud";
import { toBase64 } from "db-crud";
import { UpsertForm } from "db-crud";
import { UpsertPage } from "db-crud";
import { useInfiniteGetDbModel } from "db-crud";
import { useModelFromUrl } from "db-crud";
import { useUrl } from "db-crud";
import { FileTabs } from "file-tabs";
import { getActivePage } from "file-tabs";
import { getOpenPageUrl } from "file-tabs";
import { renderIcon } from "file-tabs";
import { FunctionForm } from "function-form";
import { isAltB } from "hotkeys";
import { isAltN } from "hotkeys";
import { isAltO } from "hotkeys";
import { isAltW } from "hotkeys";
import { isCtrlBacktick } from "hotkeys";
import { isCtrlP } from "hotkeys";
import { isCtrlS } from "hotkeys";
import { isCtrlSpace } from "hotkeys";
import { useHotkey } from "hotkeys";
import { useHotkeys } from "hotkeys";
import { AuthenticationLayout } from "layout";
import { Header } from "layout";
import { LayoutGrid } from "layout";
import { PingApi } from "layout";
import { getLegacyMenu } from "menu";
import { getRealItemRecursive } from "nested-menu";
import { getTitle } from "nested-menu";
import { NestedMenuItem } from "nested-menu";
import { NestedMenu } from "nested-menu";
import { useExpanded } from "nested-menu";
import { ALink } from "next-a-link";
import { A } from "react-with-native";
import { ActivityIndicator } from "react-with-native";
import { Button } from "react-with-native";
import { Form } from "react-with-native";
import { getTailwindModules } from "react-with-native";
import { H2 } from "react-with-native";
import { I } from "react-with-native";
import { Image } from "react-with-native";
import { Input } from "react-with-native";
import { joinClassNames } from "react-with-native";
import { Label } from "react-with-native";
import { Li } from "react-with-native";
import { Ol } from "react-with-native";
import { P } from "react-with-native";
import { Pressable } from "react-with-native";
import { Select } from "react-with-native";
import { Span } from "react-with-native";
import { Strong } from "react-with-native";
import { Svg } from "react-with-native";
import { TextArea } from "react-with-native";
import { Text } from "react-with-native";
import { Toggle } from "react-with-native";
import { TouchableOpacity } from "react-with-native";
import { trimClassName } from "react-with-native";
import { Ul } from "react-with-native";
import { wrapInTextIfNeeded } from "react-with-native";
import { AlertProvider } from "react-with-native-alert";
import { useAlert } from "react-with-native-alert";
import { DataForm } from "react-with-native-form";
import { DefaultInputContainer } from "react-with-native-form";
import { errorOnField } from "react-with-native-form";
import { isObject } from "react-with-native-form";
import { makeInputField } from "react-with-native-form";
import { castToNumber } from "react-with-native-form-inputs";
import { DateInput } from "react-with-native-form-inputs";
import { DatetimeInput } from "react-with-native-form-inputs";
import { isNumber } from "react-with-native-form-inputs";
import { LabelsInput } from "react-with-native-form-inputs";
import { MapInput } from "react-with-native-form-inputs";
import { NumberInput } from "react-with-native-form-inputs";
import { PasswordInput } from "react-with-native-form-inputs";
import { PhoneInput } from "react-with-native-form-inputs";
import { SelectInput } from "react-with-native-form-inputs";
import { SelectMultipleInput } from "react-with-native-form-inputs";
import { StarsInput } from "react-with-native-form-inputs";
import { TextAreaInput } from "react-with-native-form-inputs";
import { TextInput } from "react-with-native-form-inputs";
import { TimeInput } from "react-with-native-form-inputs";
import { ToggleInput } from "react-with-native-form-inputs";
import { ModalProvider } from "react-with-native-modal";
import { Modal } from "react-with-native-modal";
import { useModal } from "react-with-native-modal";
import { toast } from "react-with-native-notification";
import { useNavigation } from "react-with-native-router";
import { getRealValue } from "react-with-native-select";
import { useSelectMultiple } from "react-with-native-select";
import { useSelect } from "react-with-native-select";
import { createStoreProvider } from "react-with-native-store";
import { createStore } from "react-with-native-store";
import { createUseStore } from "react-with-native-store";
import { getItemSync } from "react-with-native-store";
import { getItem } from "react-with-native-store";
import { setItem } from "react-with-native-store";
import { getColumns } from "react-with-native-table";
import { TableHeadItem } from "react-with-native-table";
import { TableRow } from "react-with-native-table";
import { Table } from "react-with-native-table";
import { useIsInViewport } from "react-with-native-table";
import { ArrayForm } from "simplified-schema-form";
import { FormContainer } from "simplified-schema-form";
import { getReferencedModelDataItem } from "simplified-schema-form";
import { ObjectForm } from "simplified-schema-form";
import { ReferenceInput } from "simplified-schema-form";
import { renderParameterTitle } from "simplified-schema-form";
import { SimplifiedSchemaForm } from "simplified-schema-form";
import { useReferencableModelData } from "simplified-schema-form";
import { useTsInterfaceForm } from "simplified-schema-form";
import { Tooltip } from "tooltip";
import { useOnScreen } from "use-on-screen";
import { OpenFileWriterPages } from "file-writer";
import { useFileWriter } from "file-writer";
import { WriterLayout } from "file-writer";
import { Dataset } from "generative-ui";
import { FileActions } from "generative-ui";
import { Menu } from "generative-ui";
import { NavButton } from "generative-ui";
import { PromptButton } from "generative-ui";
import { ReaderPageNext } from "generative-ui";
import { ReaderPage } from "generative-ui";
import { SelectionPrompts } from "generative-ui";
import { setConfig } from "generative-ui";
import { SettingsPage } from "generative-ui";
import { useAdmin } from "generative-ui";
import { useFileActions } from "generative-ui";
import { useQueryPath } from "generative-ui";
import { useVariantResult } from "generative-ui";
import { VariantSelector } from "generative-ui";
import { getRealSrc } from "markdown";
import { getUrlFromRelativeUrl } from "markdown";
import { getYoutubeId } from "markdown";
import { HtmlHeader } from "markdown";
import { MarkdownCodeblock } from "markdown";
import { MarkdownContentRender } from "markdown";
import { MarkdownContent } from "markdown";
import { Parameter } from "markdown";
import { renderFrontmatter } from "markdown";
import { renderMarkdownChunk } from "markdown";
import { renderMarkdownContent } from "markdown";
import { renderMarkdownParse } from "markdown";
import { renderMarkdownTitle } from "markdown";
import { useOpenHashDetails } from "markdown";
import { ContextualPromptResultsTab } from "prompt-components";
import { FilePromptSelect } from "prompt-components";
import { processPrompt } from "prompt-components";
import { usePromptResultAlert } from "prompt-components";
import { AugmentedWordComponent } from "reader-ui";
import { Dictionary } from "reader-ui";
import { DocsReaderLayout } from "reader-ui";
import { ReaderPageContent } from "reader-ui";
import { ReaderPageHeader } from "reader-ui";
import { Share } from "share";
import { Shareable } from "share";
import { useAllText } from "share";
import { useLastSelection } from "share";
import { useProjectRelativeScreenshot } from "share";
import { ShortMarkdownPlayer } from "short-markdown-writer-input";
import { ShortMarkdownSlide } from "short-markdown-writer-input";
import { ShortStudio } from "short-markdown-writer-input";
import { useMultiAudio } from "short-markdown-writer-input";
import { SwipeHomepage } from "swipe-homepage";
import { Timeline } from "timeline";
import { Completion } from "writer-input";
import { ContentEditableDivInput } from "writer-input";
import { ContextTextArea } from "writer-input";
import { DivContentEditable } from "writer-input";
import { editSubtextSubwordConfig } from "writer-input";
import { EditWriterInput } from "writer-input";
import { FrontmatterForm } from "writer-input";
import { getContext } from "writer-input";
import { getSubtext } from "writer-input";
import { getTextSegments } from "writer-input";
import { getWriterTypeFromContent } from "writer-input";
import { isAugmentedWordMatch } from "writer-input";
import { isTypescript } from "writer-input";
import { MarkdownCompletions } from "writer-input";
import { MarkdownParsePresentation } from "writer-input";
import { MarkdownView } from "writer-input";
import { MarkedParagraph } from "writer-input";
import { MarkedText } from "writer-input";
import { MarkedToken } from "writer-input";
import { omitSpecialCharactersFromStart } from "writer-input";
import { parseTextContentToHtmlString } from "writer-input";
import { SmartContentEditableDivInput } from "writer-input";
import { SpannedSentence } from "writer-input";
import { SubtextContainer } from "writer-input";
import { Subword } from "writer-input";
import { testAllContentEditableRenderComponents } from "writer-input";
import { testContentEditableRenderComponent } from "writer-input";
import { TitleContainer } from "writer-input";
import { trimAround } from "writer-input";
import { trimLeft } from "writer-input";
import { TypescriptCompletions } from "writer-input";
import { WriterConfigForm } from "writer-input";
import { WriterInput } from "writer-input";

export const sdk = { AppsMenu,
AssetInput,
FileInput,
getTypeFromFileBlob,
makeBackendAsset,
MediaRecorderComponent,
MediaRecorder,
ReactMediaRecorder,
SelectMedia,
useReactMediaRecorder,
WebcamCapture,
AssetView,
getSrc,
InteractiveAsset,
itemGetBackendAssetUrl,
ModelItemAssetView,
useAssetInfo,
useAsset,
AuthenticationMethodsCrud,
LoginForm,
LoginWrapper,
MeAuthenticationInfo,
PersonProfileDetailsForm,
PictureWithInfoDropdown,
PublicPersonComponent,
PublicProfile,
SignupForm,
UpdateMeForm,
BigButton,
ContextMenuItemComponent,
useContextMenu,
useContextPopper,
useContext,
CrudGrid,
CrudTable,
CrudTimeline,
CrudTree,
DatasetForm,
DbPage,
getPropertiesDataParameterNames,
IndexInstanceContainer,
ModelComponent,
openWhatsapp,
shimmer,
SimplifiedSchemaFormDebug,
sortToItem,
SpaceCard,
toBase64,
UpsertForm,
UpsertPage,
useInfiniteGetDbModel,
useModelFromUrl,
useUrl,
FileTabs,
getActivePage,
getOpenPageUrl,
renderIcon,
FunctionForm,
isAltB,
isAltN,
isAltO,
isAltW,
isCtrlBacktick,
isCtrlP,
isCtrlS,
isCtrlSpace,
useHotkey,
useHotkeys,
AuthenticationLayout,
Header,
LayoutGrid,
PingApi,
getLegacyMenu,
getRealItemRecursive,
getTitle,
NestedMenuItem,
NestedMenu,
useExpanded,
ALink,
A,
ActivityIndicator,
Button,
Form,
getTailwindModules,
H2,
I,
Image,
Input,
joinClassNames,
Label,
Li,
Ol,
P,
Pressable,
Select,
Span,
Strong,
Svg,
TextArea,
Text,
Toggle,
TouchableOpacity,
trimClassName,
Ul,
wrapInTextIfNeeded,
AlertProvider,
useAlert,
DataForm,
DefaultInputContainer,
errorOnField,
isObject,
makeInputField,
castToNumber,
DateInput,
DatetimeInput,
isNumber,
LabelsInput,
MapInput,
NumberInput,
PasswordInput,
PhoneInput,
SelectInput,
SelectMultipleInput,
StarsInput,
TextAreaInput,
TextInput,
TimeInput,
ToggleInput,
ModalProvider,
Modal,
useModal,
toast,
useNavigation,
getRealValue,
useSelectMultiple,
useSelect,
createStoreProvider,
createStore,
createUseStore,
getItemSync,
getItem,
setItem,
getColumns,
TableHeadItem,
TableRow,
Table,
useIsInViewport,
ArrayForm,
FormContainer,
getReferencedModelDataItem,
ObjectForm,
ReferenceInput,
renderParameterTitle,
SimplifiedSchemaForm,
useReferencableModelData,
useTsInterfaceForm,
Tooltip,
useOnScreen,
OpenFileWriterPages,
useFileWriter,
WriterLayout,
Dataset,
FileActions,
Menu,
NavButton,
PromptButton,
ReaderPageNext,
ReaderPage,
SelectionPrompts,
setConfig,
SettingsPage,
useAdmin,
useFileActions,
useQueryPath,
useVariantResult,
VariantSelector,
getRealSrc,
getUrlFromRelativeUrl,
getYoutubeId,
HtmlHeader,
MarkdownCodeblock,
MarkdownContentRender,
MarkdownContent,
Parameter,
renderFrontmatter,
renderMarkdownChunk,
renderMarkdownContent,
renderMarkdownParse,
renderMarkdownTitle,
useOpenHashDetails,
ContextualPromptResultsTab,
FilePromptSelect,
processPrompt,
usePromptResultAlert,
AugmentedWordComponent,
Dictionary,
DocsReaderLayout,
ReaderPageContent,
ReaderPageHeader,
Share,
Shareable,
useAllText,
useLastSelection,
useProjectRelativeScreenshot,
ShortMarkdownPlayer,
ShortMarkdownSlide,
ShortStudio,
useMultiAudio,
SwipeHomepage,
Timeline,
Completion,
ContentEditableDivInput,
ContextTextArea,
DivContentEditable,
editSubtextSubwordConfig,
EditWriterInput,
FrontmatterForm,
getContext,
getSubtext,
getTextSegments,
getWriterTypeFromContent,
isAugmentedWordMatch,
isTypescript,
MarkdownCompletions,
MarkdownParsePresentation,
MarkdownView,
MarkedParagraph,
MarkedText,
MarkedToken,
omitSpecialCharactersFromStart,
parseTextContentToHtmlString,
SmartContentEditableDivInput,
SpannedSentence,
SubtextContainer,
Subword,
testAllContentEditableRenderComponents,
testContentEditableRenderComponent,
TitleContainer,
trimAround,
trimLeft,
TypescriptCompletions,
WriterConfigForm,
WriterInput};

export type SdkType = typeof sdk;