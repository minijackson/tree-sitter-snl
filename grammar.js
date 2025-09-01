/**
 * @file tree-sitter grammar for the EPICS Sequencer's SNL files
 * @author Rémi NICOLE <remi.nicole@cea.fr>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "snl",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
