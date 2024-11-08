import { CanonicalParameterName } from "./__generated__/InvocationParametersFormQuery.graphql";

export const NUM_MAX_PLAYGROUND_INSTANCES = 4;

/**
 * Map of {@link ChatMessageRole} to potential role values.
 * Used to map roles to a canonical role.
 */
export const ChatRoleMap: Record<ChatMessageRole, string[]> = {
  user: ["user", "human"],
  ai: ["assistant", "bot", "ai"],
  system: ["system"],
  tool: ["tool"],
};

/**
 * Parsing errors for parsing a span to a playground instance
 */
export const INPUT_MESSAGES_PARSING_ERROR =
  "Unable to parse span input messages, expected messages which include a role and content.";
export const OUTPUT_MESSAGES_PARSING_ERROR =
  "Unable to parse span output messages, expected messages which include a role and content.";
export const OUTPUT_VALUE_PARSING_ERROR =
  "Unable to parse span output expected output.value to be present.";
export const SPAN_ATTRIBUTES_PARSING_ERROR =
  "Unable to parse span attributes, attributes must be valid JSON.";
export const MODEL_CONFIG_PARSING_ERROR =
  "Unable to parse model config, expected llm.model_name to be present.";
export const MODEL_CONFIG_WITH_INVOCATION_PARAMETERS_PARSING_ERROR =
  "Unable to parse model config, expected llm.invocation_parameters json string to be present.";
export const MODEL_CONFIG_WITH_RESPONSE_FORMAT_PARSING_ERROR =
  "Unable to parse invocation parameters response_format, expected llm.invocation_parameters.response_format to be a well formed json object or undefined.";
export const TOOLS_PARSING_ERROR =
  "Unable to parse tools, expected tools to be an array of valid tools.";

export const modelProviderToModelPrefixMap: Record<ModelProvider, string[]> = {
  AZURE_OPENAI: [],
  ANTHROPIC: ["claude"],
  OPENAI: ["gpt", "o1"],
};

export const TOOL_CHOICE_PARAM_CANONICAL_NAME: Extract<
  CanonicalParameterName,
  "TOOL_CHOICE"
> = "TOOL_CHOICE";

export const TOOL_CHOICE_PARAM_NAME = "tool_choice";

export const RESPONSE_FORMAT_PARAM_CANONICAL_NAME: Extract<
  CanonicalParameterName,
  "RESPONSE_FORMAT"
> = "RESPONSE_FORMAT";

export const RESPONSE_FORMAT_PARAM_NAME = "response_format";

/**
 * List of parameter canonical names to ignore in the invocation parameters form
 * These parameters are rendered else where on the page
 */
export const paramsToIgnoreInInvocationParametersForm: CanonicalParameterName[] =
  [TOOL_CHOICE_PARAM_CANONICAL_NAME, RESPONSE_FORMAT_PARAM_CANONICAL_NAME];
