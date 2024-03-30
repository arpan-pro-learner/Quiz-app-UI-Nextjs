import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="bg-gray-1000 min-h-screen py-12 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">
                Quiz Id: #Q107
              </p>
              <h1 className="text-3xl font-bold tracking-tight">
                What is the capital of France?
              </h1>
              <p className="text-base leading-loose text-gray-500">
                Choose the correct answer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="paris"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="paris">
                      Paris
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="berlin"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="berlin">
                      Berlin
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="london"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="london">
                      London
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                What is the capital of Italy?
              </h1>
              <p className="text-base leading-loose text-gray-500">
                Choose the correct answer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="rome"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="rome">
                      Rome
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="berlin2"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="berlin2">
                      Berlin
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="london2"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="london2">
                      London
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                What is the capital of Italy?
              </h1>
              <p className="text-base leading-loose text-gray-500">
                Choose the correct answer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="rome"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="rome">
                      Rome
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="berlin2"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="berlin2">
                      Berlin
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="london2"
                      name="answer"
                      required
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="london2">
                      London
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button size="lg" variant="outline">
              Previous
            </Button>
            <Button size="lg">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
