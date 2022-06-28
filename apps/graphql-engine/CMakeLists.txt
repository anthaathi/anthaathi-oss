cmake_minimum_required(VERSION 3.22)
project(graphql_engine)

set(CMAKE_CXX_STANDARD 20)

add_subdirectory(libgraphqlparser)

add_executable(graphql_engine main.cpp)
