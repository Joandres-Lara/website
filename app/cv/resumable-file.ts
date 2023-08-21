export default interface ResumableFile {
 toBuffer(): Buffer;
 render(): Promise<void>;
 getLastModifiedDate(): Promise<Date>;
 shouldCreate(): Promise<boolean>;
}
