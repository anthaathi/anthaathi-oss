package org.anthaathi.graphql.engine.deployment;

import io.quarkus.deployment.annotations.BuildStep;
import io.quarkus.deployment.builditem.FeatureBuildItem;

class GraphqlEngineProcessor {

    private static final String FEATURE = "graphql-engine";

    @BuildStep
    FeatureBuildItem feature() {
        return new FeatureBuildItem(FEATURE);
    }
}
