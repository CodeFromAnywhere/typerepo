#!/usr/bin/env node
import { writeAllCodestories } from "../writeAllCodestories";

/**
 * Arguments:none
 */
const writeAllCodestoriesCli = async () => {
  writeAllCodestories(true);
};
writeAllCodestoriesCli();
