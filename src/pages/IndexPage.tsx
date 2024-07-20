import { Root } from "@/components/Root";
import { StreamCounter } from "@/components/StreamCounter";

export const IndexPage = ({ count }: { count: number }) => {
    return (
        <Root>
            <div class="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <h1 class="text-5xl font-bold underline">Hello, Elysia!</h1>
                <StreamCounter count={count} />
            </div>
        </Root>
    );
};
