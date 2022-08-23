import { compose } from "shared/lib/fp";
import { withRouter } from "./with-router";
import { withApollo } from "./with-apollo";

export const withProviders = compose(
    withRouter,
    withApollo,
)
